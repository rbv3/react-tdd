import {Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {useState} from 'react';
import {connect} from 'react-redux';
import {createRestaurant} from '../store/restaurants/actions';
import Alert from '@material-ui/lab/Alert';

export const NewRestaurantForm = ({createRestaurant}) => {
  const [name, setName] = useState('');
  const [validationError, setValidationError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (name) {
      setValidationError(false);
      createRestaurant(name).then(() => {
        setName('');
      });
    } else {
      setValidationError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {validationError && <Alert severity="error">Name is required</Alert>}
      <TextField
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Add Restaurant"
        fullWidth
        variant="filled"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        data-testid="new-restaurant-submit-button"
      >
        Add
      </Button>
    </form>
  );
};

const mapStateToProps = null;
const mapDispatchToProps = {createRestaurant};

export default connect(mapStateToProps, mapDispatchToProps)(NewRestaurantForm);
