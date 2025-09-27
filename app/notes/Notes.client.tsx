"use client";

import NoteList from "@/components/NoteList/NoteList";
import { fetchNotes } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

// Клієнтська логіка отримання списку нотаток за допомогою
// useQuery та їх відображення

function NotesClient() {
  const { data } = useQuery({
    queryKey: ["note"],
    queryFn: () => fetchNotes(),
    refetchOnMount: false,
  });

  return <div>{data && <NoteList notes={data.notes} />}</div>;
}

export default NotesClient;
