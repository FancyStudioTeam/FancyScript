import { validateConditional } from "@conditionals/validateConditional.js";
import { throwError } from "@errors";
import { validateFunction } from "@functions/validateFunction.js";
import { SequencesSchema } from "@sequences/schemas/SequencesSchema.js";
import type { Sequence } from "@sequences/types.js";
import { zod } from "@utils/zod.js";

export const isRawConditionalObject = (sequence: unknown) =>
  typeof sequence === "object" && sequence !== null && "if" in sequence && "then" in sequence;

export const validateSequences = async (sequence: unknown): Promise<Sequence[]> => {
  const data = await zod(SequencesSchema, sequence).catch((error) => throwError(error));
  const sequences: Sequence[] = [];

  for (const sequence of data) {
    sequences.push(
      isRawConditionalObject(sequence) ? await validateConditional(sequence) : await validateFunction(sequence),
    );
  }

  return sequences;
};
