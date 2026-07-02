import { useEffect, useRef, useState } from 'react'
import { useQuoteModal } from '../../context/QuoteModalContext'
import flatPanel from '../../assets/images/solar-panel-flat.png'
import curvedPanel from '../../assets/images/solar-panel-curved.png'

const productData = [
  {
    id: 'spsp-260sp',
    name: 'Semi Flexible RV Solar Panel 260W with monocrystalline solar cells (SPSP-260SP)',
    model: 'SPSP-260SP',
    mrp: 23999,
    price: 18999,
    save: 21,
    image: flatPanel,
    specs: {
      power: '260W',
      voltage: '28.5V',
      cellType: 'Monocrystalline',
      weight: '4.2 kg',
      dimensions: '1540 x 700 x 3 mm'
    }
  },
  {
    id: 'spsp-290sp',
    name: 'Semi Flexible RV Solar Panel 290W 30.67V with monocrystalline solar cells (SPSP-290SP)',
    model: 'SPSP-290SP',
    mrp: 25999,
    price: 20999,
    save: 19,
    image: curvedPanel,
    specs: {
      power: '290W',
      voltage: '30.67V',
      cellType: 'Monocrystalline',
      weight: '4.6 kg',
      dimensions: '1680 x 710 x 3 mm'
    }
  },
  {
    id: 'spsp-315sp',
    name: 'Semi Flexible RV Solar Panel 315W 31.94V with monocrystalline solar cells (SPSP-315SP)',
    model: 'SPSP-315SP',
    mrp: 27999,
    price: 22999,
    save: 18,
    image: curvedPanel,
    specs: {
      power: '315W',
      voltage: '31.94V',
      cellType: 'Monocrystalline',
      weight: '4.9 kg',
      dimensions: '1800 x 720 x 3 mm'
    }
  },
  {
    id: 'spsp-100sp',
    name: 'Semi Flexible RV Solar Panel 100W with monocrystalline solar cells (SPSP-100SP)',
    model: 'SPSP-100SP',
    mrp: 13499,
    price: 8499,
    save: 37,
    image: flatPanel,
    specs: {
      power: '100W',
      voltage: '18.0V',
      cellType: 'Monocrystalline',
      weight: '2.1 kg',
      dimensions: '1050 x 540 x 3 mm'
    }
  },
  {
    id: 'spsp-200sp',
    name: 'Semi Flexible RV Solar Panel 200W with monocrystalline solar cells (SPSP-200SP)',
    model: 'SPSP-200SP',
    mrp: 20699,
    price: 15699,
    save: 24,
    image: curvedPanel,
    specs: {
      power: '200W',
      voltage: '24.0V',
      cellType: 'Monocrystalline',
      weight: '3.5 kg',
      dimensions: '1350 x 680 x 3 mm'
    }
  },
  {
    id: 'spsp-230sp',
    name: 'Semi Flexible RV Solar Panel 230W with monocrystalline solar cells (SPSP-230SP)',
    model: 'SPSP-230SP',
    mrp: 21799,
    price: 16799,
    save: 23,
    image: flatPanel,
    specs: {
      power: '230W',
      voltage: '26.0V',
      cellType: 'Monocrystalline',
      weight: '3.8 kg',
      dimensions: '1450 x 690 x 3 mm'
    }
  }
]

function Products() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const { openQuoteModal } = useQuoteModal()
  const [favorites, setFavorites] = useState([])
  const [compareList, setCompareList] = useState([])
  const [isCompareOpen, setIsCompareOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    )
  }

  const toggleCompare = (productId) => {
    setCompareList((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId)
      } else {
        if (prev.length >= 3) {
          alert('You can compare a maximum of 3 products at a time.')
          return prev
        }
        return [...prev, productId]
      }
    })
  }

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount)
  }

  const selectedProductsForCompare = productData.filter((p) => compareList.includes(p.id))

  return (
    <section
      id="products"
      ref={ref}
      className="relative overflow-hidden bg-slate-50/50 py-20 border-b border-slate-100"
    >
      {/* Decorative Blur Background Elements */}
      <div className="pointer-events-none absolute -left-40 top-1/3 -z-10 h-96 w-96 rounded-full bg-emerald-500/5 blur-[100px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 bottom-1/3 -z-10 h-96 w-96 rounded-full bg-amber-500/5 blur-[100px]" aria-hidden="true" />

      <div className="site-container">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">Our Product Range</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Semi-Flexible RV{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Solar Panels
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-500">
            Engineered for durability, flexibility, and outstanding efficiency. Ideal for campervans, motorhomes, yachts, marine vessels, and uneven roof surfaces.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productData.map((product, index) => {
            const isFav = favorites.includes(product.id)
            const isComparing = compareList.includes(product.id)

            return (
              <div
                key={product.id}
                className={`group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-sm transition-all duration-700 hover:shadow-xl hover:shadow-emerald-100/20 hover:-translate-y-1 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] bg-slate-50/50 flex items-center justify-center p-6 overflow-hidden border-b border-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Favorite Toggle (Heart Icon) */}
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm transition hover:bg-white hover:scale-110 active:scale-95 cursor-pointer"
                    aria-label="Add to Wishlist"
                  >
                    <svg
                      className={`h-5.5 w-5.5 transition-colors duration-300 ${
                        isFav ? 'fill-rose-500 text-rose-500' : 'text-slate-400 hover:text-rose-500'
                      }`}
                      fill={isFav ? 'currentColor' : 'none'}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </button>

                  {/* Save Badge */}
                  <div className="absolute bottom-0 left-0 bg-orange-600 px-4 py-1.5 text-xs font-bold text-white uppercase tracking-wider rounded-tr-lg shadow-sm">
                    Save: {product.save}%
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Title */}
                    <h3 className="text-sm md:text-base font-bold text-slate-800 leading-snug group-hover:text-emerald-700 transition-colors">
                      {product.name}
                    </h3>

                    {/* Model / SKU */}
                    <div className="mt-2.5">
                      <span className="inline-block text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded">
                        {product.model}
                      </span>
                    </div>

                    {/* Pricing */}
                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="text-xs text-slate-400 line-through">
                        MRP: {formatPrice(product.mrp)}
                      </span>
                      <span className="text-xl font-black text-emerald-600">
                        {formatPrice(product.price)}
                      </span>
                    </div>
                  </div>

                  {/* Actions (Compare & Quote/Cart) */}
                  <div className="mt-6 flex items-center justify-between gap-4 pt-4 border-t border-slate-100">
                    <button
                      onClick={() => toggleCompare(product.id)}
                      className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer ${
                        isComparing
                          ? 'bg-orange-600 text-white shadow-md'
                          : 'bg-orange-50 text-orange-600 hover:bg-orange-100'
                      }`}
                    >
                      {isComparing ? (
                        <>
                          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          Comparing
                        </>
                      ) : (
                        'Compare'
                      )}
                    </button>

                    <button
                      onClick={openQuoteModal}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-sm transition hover:bg-emerald-600 hover:text-white hover:scale-110 active:scale-95 cursor-pointer"
                      title="Enquire Now"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Floating Compare Bar */}
      {compareList.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center justify-between gap-6 rounded-full border border-slate-200 bg-white/95 px-6 py-3.5 shadow-xl shadow-slate-200/80 backdrop-blur-md animate-fade-in max-w-md w-[90%] md:w-auto">
          <div className="flex items-center gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-600 text-xs font-bold text-white">
              {compareList.length}
            </span>
            <span className="text-sm font-bold text-slate-700">
              Product{compareList.length > 1 ? 's' : ''} selected
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCompareOpen(true)}
              className="inline-flex h-9 items-center justify-center rounded-full bg-emerald-600 px-5 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700 cursor-pointer"
            >
              Compare Now
            </button>
            <button
              onClick={() => setCompareList([])}
              className="text-xs font-semibold text-slate-400 hover:text-slate-600 px-2 cursor-pointer"
            >
              Clear
            </button>
          </div>
        </div>
      )}

      {/* Compare Modal Overlay */}
      {isCompareOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl animate-fade-in flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
              <h3 className="text-lg font-bold text-slate-800">Product Comparison</h3>
              <button
                onClick={() => setIsCompareOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-50 hover:text-slate-600 cursor-pointer"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body (Scrollable Table) */}
            <div className="overflow-x-auto p-6 flex-grow">
              <table className="w-full min-w-[600px] border-collapse text-left text-sm text-slate-600">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="pb-4 font-bold text-slate-400 w-1/4">Specification</th>
                    {selectedProductsForCompare.map((prod) => (
                      <th key={prod.id} className="pb-4 font-bold text-slate-800 text-center w-1/4 px-4">
                        <div className="flex flex-col items-center">
                          <img src={prod.image} alt={prod.name} className="h-16 w-16 object-contain mb-2" />
                          <span className="text-xs line-clamp-2 max-w-[150px] font-extrabold leading-tight">
                            {prod.model}
                          </span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-3.5 font-bold text-slate-700">Price</td>
                    {selectedProductsForCompare.map((prod) => (
                      <td key={prod.id} className="py-3.5 text-center px-4">
                        <div className="font-extrabold text-emerald-600 text-base">
                          {formatPrice(prod.price)}
                        </div>
                        <div className="text-[11px] text-slate-400 line-through">
                          {formatPrice(prod.mrp)}
                        </div>
                        <div className="text-[11px] font-semibold text-orange-600 mt-0.5">
                          Save {prod.save}%
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3.5 font-bold text-slate-700">Rated Power</td>
                    {selectedProductsForCompare.map((prod) => (
                      <td key={prod.id} className="py-3.5 text-center px-4 font-medium text-slate-800">
                        {prod.specs.power}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3.5 font-bold text-slate-700">Working Voltage</td>
                    {selectedProductsForCompare.map((prod) => (
                      <td key={prod.id} className="py-3.5 text-center px-4 font-medium text-slate-800">
                        {prod.specs.voltage}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3.5 font-bold text-slate-700">Solar Cell Type</td>
                    {selectedProductsForCompare.map((prod) => (
                      <td key={prod.id} className="py-3.5 text-center px-4 text-slate-500">
                        {prod.specs.cellType}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3.5 font-bold text-slate-700">Weight</td>
                    {selectedProductsForCompare.map((prod) => (
                      <td key={prod.id} className="py-3.5 text-center px-4 text-slate-500">
                        {prod.specs.weight}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3.5 font-bold text-slate-700">Dimensions</td>
                    {selectedProductsForCompare.map((prod) => (
                      <td key={prod.id} className="py-3.5 text-center px-4 text-slate-500 text-xs">
                        {prod.specs.dimensions}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Modal Footer Actions */}
            <div className="flex items-center justify-end gap-3 border-t border-slate-100 px-6 py-4 bg-slate-50">
              <button
                onClick={() => setIsCompareOpen(false)}
                className="inline-flex h-10 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 text-sm font-bold text-slate-600 transition hover:bg-slate-50 cursor-pointer"
              >
                Close Comparison
              </button>
              <button
                onClick={() => {
                  setIsCompareOpen(false)
                  openQuoteModal()
                }}
                className="inline-flex h-10 items-center justify-center rounded-lg bg-emerald-600 px-6 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700 cursor-pointer"
              >
                Enquire for Selected
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Products
