import { useState } from "react";
import type { EstadoCalculadora } from "./componentes/types/calculadora";
import CalculadoraForm from "./componentes/CalculadoraForm";
import ResultadoCalculadora from "./componentes/ResultadoCalculadora";

function App() {
  const [valores, setValores] = useState<EstadoCalculadora>({
    monto: 0,
    propina: 0,
    personas: 0,
  });

  // 1. Cálculos basados en 'valores'
  const tienePersonas = valores.personas > 0;
  const propinaTotal = valores.monto * (valores.propina / 100);

  const propinaPorPersona = tienePersonas ? propinaTotal / valores.personas : 0;
  const montoPorPersona = tienePersonas ? (valores.monto + propinaTotal) / valores.personas : 0;

  // 2. Saber si hay valores para habilitar el botón RESET
  const hayValores = valores.monto > 0 || valores.propina > 0 || valores.personas > 0;

  // 3. Función de Reinicio
  const handleReset = () => {
    setValores({ monto: 0, propina: 0, personas: 0 });
  };

  return (
    <main className="min-h-screen bg-cyan-100 flex flex-col items-center justify-center p-4">
      <img src="/logo.svg" alt="Logo Tip Calculator" className="mb-10" />

      {/* Contenedor blanco global */}
      <div className="bg-white p-8 rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        <CalculadoraForm
          valores={valores}
          CambiarMonto={(monto) => setValores({ ...valores, monto })}
          CambiarPropina={(propina) => setValores({ ...valores, propina })}
          CambiarPersonas={(personas) => setValores({ ...valores, personas })}
        />

        <ResultadoCalculadora
          montoPorPersona={montoPorPersona}
          propinaPorPersona={propinaPorPersona}
          hayValores={hayValores}
          onReset={handleReset}
        />
      </div>
    </main>
  );
}

export default App;