export default function PaintingsPage(paintings) {
	return `
  <div class="object__container">
  <h1>The Paintings Page</h1>
    ${paintings.objectIDs
		.map((painting) => {
			return `
      <h2 id="${painting}">title-Thinking</h2>
      <p id="artist${painting}">artist-Thinking</p>
      <img id="image${painting}" src="" alt='image-Thinking'/>
      `;
		})
		.join('')}
  </div>
  `;
}
