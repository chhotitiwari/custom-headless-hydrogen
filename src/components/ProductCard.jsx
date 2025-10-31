export function ProductCard({ product }) {
  return (
    <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
      <img
        src={product.images.edges[0].node.transformedSrc}
        alt={product.title}
        className="w-full h-64 object-cover rounded"
      />
      <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
      <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
    </div>
  );
}
