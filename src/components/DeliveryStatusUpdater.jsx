function DeliveryStatusUpdater({ delivery, updateDeliveryStatus }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-600 mb-2">
        Update Status
      </label>

      <select
        value={delivery.status}
        onChange={(e) =>
          updateDeliveryStatus(delivery.id, e.target.value)
        }
        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
      >
        <option value="Preparing">Preparing</option>
        <option value="On The Way">On The Way</option>
        <option value="Delivered">Delivered</option>
      </select>

      <p className="mt-3 text-sm text-slate-500">
        Current: <span className="font-semibold text-slate-700">{delivery.status}</span>
      </p>
    </div>
  );
}

export default DeliveryStatusUpdater;