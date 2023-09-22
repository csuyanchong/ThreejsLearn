function getMeshFromModel(model) {
   let mesh = model.scene.children[0];

   return mesh;
}

export { getMeshFromModel };