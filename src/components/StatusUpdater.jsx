import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

const StatusUpdater = ({ order }) => {
  const { updateStatus } = useContext(OrderContext);

  return (
    <select
      value={order.status}
      onChange={(e) =>
        updateStatus(
          order.id,
          e.target.value
        )
      }
    >
      <option value="Pending">
        Pending
      </option>

      <option value="Preparing">
        Preparing
      </option>

      <option value="Out for Delivery">
        Out for Delivery
      </option>

      <option value="Delivered">
        Delivered
      </option>
    </select>
  );
};

export default StatusUpdater;