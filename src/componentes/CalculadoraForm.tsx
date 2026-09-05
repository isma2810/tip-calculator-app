import type { FormCalculadoraProps } from "./types/calculadora";

function CalculadoraForm({
  valores,
  CambiarMonto,
  CambiarPropina,
  CambiarPersonas,
}: FormCalculadoraProps) {
  return (
    <div className="space-y-6">
      {/* Monto */}
      <div className="flex flex-col space-y-2">
        <label className="font-bold text-gray-600 text-sm" htmlFor="monto">Monto</label>
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <img src="/icon-dollar.svg" alt="Dolar" className="h-4 w-4" />
          </div>
          <input
            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 pl-10 focus:outline-none focus:border-green-600 font-bold text-lg text-green-900"
            type="number"
            id="monto"
            placeholder="0"
            value={valores.monto || ""}
            onChange={(e) => CambiarMonto(Number(e.target.value))}
          />
        </div>
      </div>

      {/* Botones Propina */}
      <div className="flex flex-col space-y-2">
        <label className="font-bold text-gray-600 text-sm">Seleccione Propina</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[5, 10, 15, 25, 50].map((porcentaje) => (
            <button
              key={porcentaje}
              type="button"
              className={`font-bold rounded-lg p-3 text-lg transition-colors cursor-pointer ${
                valores.propina === porcentaje
                  ? "bg-emerald-400 text-green-950"
                  : "bg-green-950 text-white hover:bg-green-300 hover:text-green-950"
              }`}
              onClick={() => CambiarPropina(porcentaje)}
            >
              {porcentaje}%
            </button>
          ))}

          {/* Input Custom de Propina */}
          <input
            type="number"
            placeholder="Custom"
            className="bg-gray-100 font-bold text-center text-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600 text-lg"
            value={valores.propina || ""}
            onChange={(e) => CambiarPropina(Number(e.target.value))}
          />
        </div>
      </div>

      {/* Número de Personas */}
      <div className="flex flex-col space-y-2">
        <label className="font-bold text-gray-600 text-sm" htmlFor="persona">Número de personas</label>
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <img src="/icon-person.svg" alt="Persona" className="h-4 w-4" />
          </div>
          <input
            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 pl-10 focus:outline-none focus:border-green-600 text-lg font-bold text-green-900"
            type="number"
            id="persona"
            placeholder="0"
            value={valores.personas || ""}
            onChange={(e) => CambiarPersonas(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
}

export default CalculadoraForm;