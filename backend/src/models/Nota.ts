import { model, Schema, Model, Document } from 'mongoose';

interface INota extends Document {
  id: string;
  texto: string;
  foto: string;
}

const NotaSchema: Schema = new Schema(
  {
    texto: { type: String, required: true },
    foto: { type: String },
  },
  { timestamps: true },
);

export const Nota: Model<INota> = model('Nota', NotaSchema);
