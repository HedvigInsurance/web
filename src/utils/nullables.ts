const notNullable = <T>(nullableThing: T | null | undefined) => {
  if (nullableThing === null || nullableThing === undefined) {
    throw new Error(`Expected not nullable but was ${typeof nullableThing}`)
  }

  return nullableThing
}

export { notNullable }
