"use client";
import SearchBar from "@/components/forms/searchbars/form-searchbar";
import FormTable from "@/components/forms/tables/form-table";
import FormBody from "@/components/forms/body/form-body";
import { useState } from "react";

export default function HomeAdminPage() {
  const [search, setSearch] = useState("");

  const data = [
    { name: "João", email: "joao@email.com" },
    { name: "Maria", email: "maria@email.com" },
  ];

  const filtered = data.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <FormBody title="Selecione usuário para editar">
      <SearchBar onSearch={setSearch} />
      <FormTable
        columns={[
          { key: "name", label: "Nome" },
          { key: "email", label: "E-mail" },
        ]}
        data={filtered}
      />
    </FormBody>
  );
}
