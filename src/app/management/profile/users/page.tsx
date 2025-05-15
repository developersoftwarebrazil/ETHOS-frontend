"use client";
import { fetchUsers } from "@/actions/users/fetch-user";
import FormBody from "@/components/forms/body/form-body";
import SearchBar from "@/components/forms/searchbars/form-searchbar";
import FormTable from "@/components/forms/tables/form-table";
import { useEffect, useState } from "react";

export default function AdminListUserPage() {
  const [users, setUsers] = useState<{ name: string; fullname: string; email: string }[]>([]);
  const [filtered, setFiltered] = useState<typeof users>([]);

  useEffect(() => {
    async function load() {
      const data = await fetchUsers();
      setUsers(data);
      setFiltered(data);
    }
    load();
  }, []);

  const handleSearch = (value: string) => {
    const term = value.toLowerCase();
    setFiltered(users.filter((user) => user.name.toLowerCase().includes(term)));
  };

  const columns = [
    { key: "name", label: "Nome" },
    { key: "fullname", label: "Nome completo" },
    { key: "email", label: "E-mail" },
  ];

  return (
    <FormBody title="Selecione um usuário para editar">
      <section>
        <SearchBar onSearch={handleSearch} />
        <FormTable columns={columns} data={filtered} />
      </section>
    </FormBody>
  );
}
