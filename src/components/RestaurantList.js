import {useEffect} from 'react';

export const RestaurantList = ({loadRestaurants}) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);
  return (
    <>
      <h3>Restaurants List</h3>
    </>
  );
};
export default RestaurantList;
