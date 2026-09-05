import type { ResultadoCalculadoraProps } from "./types/calculadora";

function ResultadoCalculadora({
  montoPorPersona,
  propinaPorPersona,
  hayValores,
  onReset,
}: ResultadoCalculadoraProps) {
  return (
    <div className="bg-green-950 p-8 rounded-2xl flex flex-col justify-between h-full">
      <div className="space-y-8">
        {/* Propina por persona */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white font-bold text-sm">Monto Propina</p>
            <p className="text-gray-400 text-xs">/ persona</p>
          </div>
          <p className="text-4xl text-emerald-400 font-bold">
            ${propinaPorPersona.toFixed(2)}
          </p>
        </div>

        {/* Total por persona */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white font-bold text-sm">Total</p>
            <p className="text-gray-400 text-xs">/ persona</p>
          </div>
          <p className="text-4xl text-emerald-400 font-bold">
            ${montoPorPersona.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Botón RESET */}
      <button
        type="button"
        disabled={!hayValores}
        onClick={onReset}
        className={`w-full py-3 rounded-lg text-lg uppercase font-bold transition-colors mt-8 ${
          hayValores
            ? "bg-emerald-400 text-green-950 hover:bg-emerald-300 cursor-pointer"
            : "bg-emerald-900 text-emerald-700 cursor-not-allowed"
        }`}
      >
        Reset
      </button>
    </div>
  );
}

export default ResultadoCalculadora;