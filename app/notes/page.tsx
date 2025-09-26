//! CSR-component
// "use client";

// import { fetchNotes } from "@/lib/api";
// import css from "./NotesPage.module.css";
// import { Toaster } from "react-hot-toast";
// import NoteList from "@/components/NoteList/NoteList";
// import { useState } from "react";
// import { Note } from "@/types/note";

// function Notes() {
//   const [notes, setNotes] = useState<Note[]>([]);

//   const handleClick = async () => {
//     try {
//       const res = await fetchNotes();
//       setNotes(res.notes);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className={css.app}>
//       <Toaster />
//       <header className={css.toolbar}>
//         <h3>Header</h3>
//       </header>
//       <button onClick={handleClick}>Get notes</button>
//       {notes?.length > 0 && <NoteList notes={notes} />}
//     </div>
//   );
// }

// export default Notes;

//! SSR-component
import { fetchNotes } from "@/lib/api";
import css from "./NotesPage.module.css";
import { Toaster } from "react-hot-toast";
import NoteList from "@/components/NoteList/NoteList";

async function Notes() {
  const res = await fetchNotes();

  return (
    <div className={css.app}>
      <Toaster />
      <header className={css.toolbar}>
        <h3>Header</h3>
      </header>
      {res?.notes.length > 0 && <NoteList notes={res.notes} />}
    </div>
  );
}

export default Notes;

//! Внизу оригінал

// import css from "./NotesPage.module.css";
// import { keepPreviousData, useQuery } from "@tanstack/react-query";
// import { useState } from "react";
// import { Toaster } from "react-hot-toast";
// import { useDebouncedCallback } from "use-debounce";
// import { fetchNotes } from "@/lib/api";
// import Modal from "@/components/Modal/Modal";
// import NoteForm from "@/components/NoteForm/NoteForm";
// import NoteList from "@/components/NoteList/NoteList";
// import Pagination from "@/components/Pagination/Pagination";
// import SearchBox from "@/components/SearchBox/SearchBox";

// function Notes() {
//   const [curPage, setCurPage] = useState(1);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [searchValue, setSearchValue] = useState("");

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   const { data, isLoading, isError, isSuccess } = useQuery({
//     queryKey: ["notes", curPage, searchValue],
//     queryFn: () => fetchNotes({ page: curPage, searchValue }), //це я передаю на бекенд запит. якщо натисну 3,то selected=2, отже curPage=2 і у запит пішло page = curPage + 1 = 3
//     placeholderData: keepPreviousData,
//   });

//   const handleSearch = useDebouncedCallback((value: string) => {
//     setSearchValue(value);
//     setCurPage(1);
//   }, 500);

//   return (
//     <div className={css.app}>
//       <Toaster />
//       <header className={css.toolbar}>
//         <SearchBox onSearch={handleSearch} value={searchValue} />
//         {isSuccess && data.totalPages > 1 && (
//           <Pagination
//             totalPages={data.totalPages}
//             curPage={curPage}
//             onChange={setCurPage}
//           />
//         )}
//         <button className={css.button} onClick={openModal}>
//           Create note +
//         </button>
//       </header>
//       {isLoading && <p>Loading notes...</p>}
//       {isError && <p>Something went wrong...</p>}
//       {data && <NoteList notes={data.notes} />}
//       {isModalOpen && (
//         <Modal onClose={closeModal}>
//           <NoteForm onClose={closeModal} />
//         </Modal>
//       )}
//     </div>
//   );
// }

// export default Notes;
