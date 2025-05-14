'use client'
import FormBody from "@/components/forms/body/form-body";
import SearchBar from "@/components/forms/searchbars/form-searchbar";
import FormTable from "@/components/forms/tables/form-table";
import { useState } from "react";

export default  function AdminListUserPage(){
  const[ search, setSearch]= useState('');

   const data = [
    { nome: "João", email: "joao@email.com", nomeCompleto: 'João Miguel Couto' },
    { nome: "Maria", email: "maria@email.com", nomeCompleto: 'Maria Judith' },
    { nome: "Maria", email: "maria@email.com", nomeCompleto:'Maria Joaquina' },
  ];

   const filtered = data.filter((d) =>
    d.nome.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <FormBody title="Selecione um usuário para editar">
      <section>
      <SearchBar onSearch={setSearch}/>
      <FormTable
      columns={[
          { key: "nome", label: "Nome" },
          { key: "email", label: "E-mail" },
          { key: "nomeCompleto", label: "Nome completo" },
        ]}
        data={filtered}
       />

      </section>
    </FormBody>
  );
}
