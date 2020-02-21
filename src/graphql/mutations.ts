// tslint:disable
// this is an auto generated file. This will be overwritten

export const createFactual = `mutation CreateFactual(
  $input: CreateFactualInput!
  $condition: ModelFactualConditionInput
) {
  createFactual(input: $input, condition: $condition) {
    ds
    version
    factual
  }
}
`;
export const updateFactual = `mutation UpdateFactual(
  $input: UpdateFactualInput!
  $condition: ModelFactualConditionInput
) {
  updateFactual(input: $input, condition: $condition) {
    ds
    version
    factual
  }
}
`;
export const deleteFactual = `mutation DeleteFactual(
  $input: DeleteFactualInput!
  $condition: ModelFactualConditionInput
) {
  deleteFactual(input: $input, condition: $condition) {
    ds
    version
    factual
  }
}
`;
export const createGatt = `mutation CreateGatt(
  $input: CreateGATTInput!
  $condition: ModelGATTConditionInput
) {
  createGATT(input: $input, condition: $condition) {
    article
    version
    content
  }
}
`;
export const updateGatt = `mutation UpdateGatt(
  $input: UpdateGATTInput!
  $condition: ModelGATTConditionInput
) {
  updateGATT(input: $input, condition: $condition) {
    article
    version
    content
  }
}
`;
export const deleteGatt = `mutation DeleteGatt(
  $input: DeleteGATTInput!
  $condition: ModelGATTConditionInput
) {
  deleteGATT(input: $input, condition: $condition) {
    article
    version
    content
  }
}
`;
export const createLabel = `mutation CreateLabel(
  $input: CreateLabelInput!
  $condition: ModelLabelConditionInput
) {
  createLabel(input: $input, condition: $condition) {
    ds_art
    version
    cited
  }
}
`;
export const updateLabel = `mutation UpdateLabel(
  $input: UpdateLabelInput!
  $condition: ModelLabelConditionInput
) {
  updateLabel(input: $input, condition: $condition) {
    ds_art
    version
    cited
  }
}
`;
export const deleteLabel = `mutation DeleteLabel(
  $input: DeleteLabelInput!
  $condition: ModelLabelConditionInput
) {
  deleteLabel(input: $input, condition: $condition) {
    ds_art
    version
    cited
  }
}
`;
