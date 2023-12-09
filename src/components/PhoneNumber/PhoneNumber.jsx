export const PhoneNumber = ({ number, onChange }) => (
  <input
    type="tel"
    name="number"
    value={number}
    onChange={onChange}
    required
    placeholder="Enter phone number"
  />
);
