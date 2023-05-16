import {checkToken} from "../../utilities/users-service"

export default function OrderHistoryPage() {
  
  const handleCheckToken = async() => {
   const expDate = await checkToken()
    alert(expDate);
  };

  return (
    <div>
      <h1>OrderHistoryPage</h1>
      <button onClick={handleCheckToken}>Check when my login expires</button>
      </div>
  )
}
