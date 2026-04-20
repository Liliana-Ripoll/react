import { useState } from "react";
import { DataTable } from "./components/DataTable";
import { calcularDiferenciaDias } from "./utils/dateUtils";
type Usuario = {
  id: number;
  nombre: string;
  edad: number;
};

const usuarios: Usuario[] = [
  { id: 1, nombre: "Ana", edad: 25 },
  { id: 2, nombre: "Luis", edad: 30 },
];

const columnas = [
  { key: "id", label: "ID" },
  { key: "nombre", label: "Nombre" },
  { key: "edad", label: "Edad" },
] as const;

function App() {
  const [editando, setEditando] = useState<Partial<Usuario> | null>(null);

  const dias = calcularDiferenciaDias(
    new Date("2024-01-01"),
    new Date("2024-01-10")
  );

  return (
    <div>
      <h1>Tabla de usuarios</h1>

      <DataTable data={usuarios} columns={columnas} />

      <button onClick={() => setEditando(usuarios[0])}>
        Editar primer usuario
      </button>

      {editando && (
        <div>
          <h2>Editando usuario:</h2>
          <pre>{JSON.stringify(editando, null, 2)}</pre>
        </div>
      )}

      <p>Diferencia de días: {dias}</p>
    </div>
  );
}

export default App;