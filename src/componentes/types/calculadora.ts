export type EstadoCalculadora = {
  monto: number;
  propina: number;
  personas: number;
};

export type FormCalculadoraProps = {
  valores: EstadoCalculadora;
  CambiarMonto: (monto: number) => void;
  CambiarPropina: (propina: number) => void;
  CambiarPersonas: (personas: number) => void;
};

export type ResultadoCalculadoraProps = {
  montoPorPersona: number;
  propinaPorPersona: number;
  hayValores: boolean;
  onReset: () => void;
};