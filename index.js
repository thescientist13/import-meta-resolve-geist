try {
  const resolved = import.meta.resolve('geist');

  console.log(`successfully resolved geist package to path => ${resolved}`);
} catch(e) {
  console.error(e);
}