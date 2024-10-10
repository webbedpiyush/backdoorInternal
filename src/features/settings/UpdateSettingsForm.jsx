import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Spinner from '../../ui/Spinner';
import { useSettings } from './useSettings';
import { useUpdateSetting } from './useUpdateSetting';

function UpdateSettingsForm() {
  // eslint-disable-next-line no-unused-vars
  const { isLoading, error, data: {
    minBookingLength, maxBookingLength, maxGuestPerBooking, breakfastPrice
  } = {} } = useSettings()

  const { isUpdating, updateSetting } = useUpdateSetting()

  function handleUpdate(e, field) {
    const { value } = e.target

    if (!value) return
    updateSetting({
      [field]: value
    })
  }

  if (isLoading) return <Spinner />
  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input type='number' id='min-nights' defaultValue={minBookingLength}
          disabled={isUpdating}
          onBlur={e => handleUpdate(e, "minBookingLength")} />
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input type='number' id='max-nights' defaultValue={maxBookingLength}
          disabled={isUpdating}
          onBlur={e => handleUpdate(e, "maxBookingLength")} />
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input type='number' id='max-guests' defaultValue={maxGuestPerBooking}
          disabled={isUpdating}
          onBlur={e => handleUpdate(e, "maxGuestPerBooking")} />
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input type='number' id='breakfast-price' defaultValue={breakfastPrice}
          disabled={isUpdating}
          onBlur={e => handleUpdate(e, "breakfastPrice")} />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
