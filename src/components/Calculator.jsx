import React, { useState, useEffect } from 'react';
import { Calculator as CalcIcon, Send, Sparkles } from 'lucide-react';
import { calculatorConfig, businessDetails } from '../data/siteData';

const SERVICE_CONFIGS = calculatorConfig.SERVICE_CONFIGS;

const SERVICE_ID_MAP = {
  'doctor-file': 'doctor-file',
  'wedding-card': 'invitation-cards',
  'flex-banner': 'flex-banner',
  'rollup-standee': 'rollup-standee',
  'visiting-card': 'visiting-cards',
  'handbill': 'handbills',
  'poster': 'posters',
  'sticker': 'stickers',
  'digital-offset': 'offset-bulk'
};

export default function Calculator({ onSubmitEstimate, initialServiceId }) {
  const getMappedServiceId = (id) => SERVICE_ID_MAP[id] || id || 'invitation-cards';

  const [selectedServiceId, setSelectedServiceId] = useState(getMappedServiceId(initialServiceId));
  const [selectedOptionId, setSelectedOptionId] = useState('standard');
  const [quantity, setQuantity] = useState(250);
  
  // Dimensions for flex banners (default 6x4 feet = 24 sqft)
  const [width, setWidth] = useState(6);
  const [height, setHeight] = useState(4);

  // Sync if initialServiceId changes
  useEffect(() => {
    if (initialServiceId) {
      const mapped = getMappedServiceId(initialServiceId);
      if (SERVICE_CONFIGS[mapped]) {
        setSelectedServiceId(mapped);
      }
    }
  }, [initialServiceId]);

  const currentService = SERVICE_CONFIGS[selectedServiceId] || SERVICE_CONFIGS['invitation-cards'];

  // Whenever service changes, reset options and quantity to defaults
  useEffect(() => {
    const config = SERVICE_CONFIGS[selectedServiceId] || SERVICE_CONFIGS['invitation-cards'];
    if (config && config.options && config.options.length > 0) {
      setSelectedOptionId(config.options[0].id);
      setQuantity(config.defaultQty);
    }
  }, [selectedServiceId]);

  const selectedOption = currentService.options.find(o => o.id === selectedOptionId) || currentService.options[0];

  // Calculate Base Price
  let basePrice = 0;
  let calculationDetails = '';

  if (currentService.hasDimensions) {
    // Price = Width * Height * optionRate * quantity (number of banners)
    const sqft = width * height;
    basePrice = sqft * selectedOption.price * quantity;
    calculationDetails = `${width} ft × ${height} ft = ${sqft} Sq. Ft. @ ₹${selectedOption.price}/sq.ft for ${quantity} banner(s)`;
  } else {
    basePrice = selectedOption.price * quantity;
    calculationDetails = `${quantity} items @ ₹${selectedOption.price}/pc`;
  }

  // Bulk discount matrix
  let discountPercentage = 0;
  if (!currentService.hasDimensions) {
    if (quantity >= 2500) discountPercentage = 15;
    else if (quantity >= 1000) discountPercentage = 10;
    else if (quantity >= 500) discountPercentage = 5;
  } else {
    const totalSqFt = width * height * quantity;
    if (totalSqFt >= 200) discountPercentage = 15;
    else if (totalSqFt >= 100) discountPercentage = 10;
    else if (totalSqFt >= 50) discountPercentage = 5;
  }

  const discountAmount = (basePrice * discountPercentage) / 100;
  const finalPrice = basePrice - discountAmount;

  const handleWhatsAppSend = () => {
    const specs = currentService.hasDimensions 
      ? `Dimensions: ${width}x${height} ft (${width * height} sq.ft), Material: ${selectedOption.name}`
      : `Quality: ${selectedOption.name}`;
      
    const message = `Hello Patna Printing Works! I used your website calculator to get an estimate:
- Service: ${currentService.name}
- ${specs}
- Quantity: ${quantity} ${currentService.qtyLabel}
- Calculation: ${calculationDetails}
- Est. Price: ₹${finalPrice.toFixed(0)} (After ${discountPercentage}% bulk discount)
Please contact me to discuss printing.`;

    const whatsappUrl = `https://wa.me/${businessDetails.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    if (onSubmitEstimate) {
      onSubmitEstimate({
        service: currentService.name,
        quantity: quantity,
        details: specs + `. Calc details: ${calculationDetails}. Estimated Total: ₹${finalPrice.toFixed(0)}`
      });
    }
  };

  return (
    <section id="calculator" className="relative w-full py-16 md:py-24 border-b border-slate-200 bg-slate-50">
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-20" />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10 font-sans">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full mb-4">
            <CalcIcon className="w-4 h-4 text-blue-600" />
            <span className="font-sans font-bold text-xs text-blue-700 uppercase tracking-wider">
              Live Estimator Widget
            </span>
          </div>
          <h2 className="font-sans font-black text-3xl md:text-5xl text-slate-900 tracking-tight">
            ESTIMATE YOUR PRINT PRICE
          </h2>
          <p className="font-sans text-sm text-slate-600 mt-2">
            Select your service, choose paper quality, set your quantity, and watch bulk discounts apply instantly!
          </p>
        </div>

        {/* Calculator Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 bg-white rounded-2xl border border-slate-200 p-6 md:p-10 shadow-xl">
          
          {/* Inputs Section */}
          <div className="md:col-span-7 flex flex-col gap-6 text-left border-b md:border-b-0 md:border-r border-slate-200 pb-8 md:pb-0 md:pr-8">
            
            {/* Service Dropdown */}
            <div>
              <label htmlFor="calc-service" className="block font-sans font-bold text-xs text-slate-700 uppercase tracking-wider mb-2">
                1. Select Service Type
              </label>
              <select
                id="calc-service"
                value={selectedServiceId}
                onChange={(e) => setSelectedServiceId(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 font-sans font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              >
                {Object.entries(SERVICE_CONFIGS).map(([id, config]) => (
                  <option key={id} value={id}>{config.name}</option>
                ))}
              </select>
            </div>

            {/* Printing Option Select */}
            <div>
              <label className="block font-sans font-bold text-xs text-slate-700 uppercase tracking-wider mb-2">
                2. Choose Paper / Finish Quality
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentService.options.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedOptionId(opt.id)}
                    className={`text-left p-3 rounded-xl border font-sans text-xs font-semibold flex flex-col justify-between transition-all ${
                      selectedOptionId === opt.id 
                        ? 'bg-blue-50 border-blue-500 text-blue-900 shadow-sm' 
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span className="font-bold">{opt.name}</span>
                    <span className="text-[11px] text-blue-600 font-bold mt-1">₹{opt.price} {currentService.hasDimensions ? '/ sq.ft' : '/ pc'}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Dimension Inputs for Flex Banners */}
            {currentService.hasDimensions && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="width-input" className="block font-sans font-bold text-xs text-slate-700 uppercase tracking-wider mb-2">
                    Banner Width (Feet)
                  </label>
                  <input
                    id="width-input"
                    type="number"
                    min="1"
                    max="100"
                    value={width}
                    onChange={(e) => setWidth(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 font-sans font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="height-input" className="block font-sans font-bold text-xs text-slate-700 uppercase tracking-wider mb-2">
                    Banner Height (Feet)
                  </label>
                  <input
                    id="height-input"
                    type="number"
                    min="1"
                    max="100"
                    value={height}
                    onChange={(e) => setHeight(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 font-sans font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}

            {/* Quantity Slider & Input */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="qty-slider" className="font-sans font-bold text-xs text-slate-700 uppercase tracking-wider">
                  3. Select Quantity
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id="qty-input"
                    type="number"
                    min={currentService.minQty}
                    max={currentService.maxQty}
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(currentService.minQty, parseInt(e.target.value) || currentService.minQty))}
                    className="w-24 bg-slate-50 border border-slate-300 rounded-xl p-1.5 text-center font-sans font-bold text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="font-sans text-xs text-slate-500 font-semibold">{currentService.qtyLabel}</span>
                </div>
              </div>
              <input
                id="qty-slider"
                type="range"
                min={currentService.minQty}
                max={currentService.maxQty}
                step={currentService.minQty >= 1000 ? 500 : currentService.minQty >= 100 ? 50 : 1}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between font-sans text-[11px] text-slate-500 mt-1.5 font-semibold">
                <span>MIN: {currentService.minQty}</span>
                <span>MAX: {currentService.maxQty}</span>
              </div>
            </div>

          </div>

          {/* Outputs / Estimate Receipt Section */}
          <div className="md:col-span-5 flex flex-col justify-between text-left">
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 relative">
              
              {/* Receipt Visual Header */}
              <div className="text-center pb-4 mb-4 border-b border-slate-200">
                <span className="font-sans text-xs uppercase tracking-widest font-bold text-slate-400">ESTIMATE SUMMARY</span>
                <p className="font-sans font-bold text-sm text-blue-600 mt-1">{currentService.name}</p>
              </div>

              {/* Specs Details */}
              <div className="space-y-3 font-sans text-xs text-slate-600 mb-6">
                <div className="flex justify-between">
                  <span>Selected Option:</span>
                  <span className="font-bold text-slate-900 text-right max-w-[160px] truncate">{selectedOption.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Rate:</span>
                  <span className="font-bold text-slate-900">₹{selectedOption.price} {currentService.hasDimensions ? '/ sq.ft' : '/ pc'}</span>
                </div>
                {currentService.hasDimensions && (
                  <div className="flex justify-between">
                    <span>Banner Size:</span>
                    <span className="font-bold text-slate-900">{width} × {height} ft ({width * height} sq.ft)</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Total Quantity:</span>
                  <span className="font-bold text-slate-900">{quantity} {currentService.qtyLabel}</span>
                </div>
                <div className="flex justify-between border-t border-slate-200 pt-2.5">
                  <span>Subtotal Price:</span>
                  <span className="font-bold text-sm text-slate-900">₹{basePrice.toFixed(0)}</span>
                </div>
                
                {/* Discount */}
                {discountPercentage > 0 && (
                  <div className="flex justify-between items-center bg-emerald-50 p-2 rounded-lg border border-emerald-200 text-emerald-700">
                    <span className="flex items-center gap-1 font-bold">
                      <Sparkles className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                      Bulk Discount ({discountPercentage}%):
                    </span>
                    <span className="font-black">-₹{discountAmount.toFixed(0)}</span>
                  </div>
                )}
              </div>

              {/* Grand Total Display */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center">
                <span className="font-sans font-bold text-xs text-slate-400 uppercase block">ESTIMATED TOTAL</span>
                <span className="font-sans font-black text-3xl md:text-4xl text-slate-900">
                  ₹{finalPrice.toFixed(0)}
                </span>
                <span className="font-sans text-[10px] block text-slate-400 mt-1 uppercase font-semibold">Excluding GST & Shipping</span>
              </div>
            </div>

            {/* Send Action */}
            <div className="mt-6">
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold text-sm flex justify-center items-center gap-3 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <Send className="w-5 h-5" />
                <span>Submit Estimate via WhatsApp</span>
              </button>
              <span className="font-sans text-[11px] text-slate-500 mt-2 block text-center italic">
                * Note: Indicative rates. Tap button to confirm design proofs & custom orders.
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

