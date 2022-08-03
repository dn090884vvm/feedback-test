export const Statistcs = ({
  good,
  bad,
  neutral,
  total,
  positivePersentage,
}) => {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral:{neutral}</li>
      <li>Bad:{bad}</li>
      <li>Total:{total}</li>
      <li>
        Positive feedback:
        {positivePersentage ? `${positivePersentage}` : ' No positive'}
      </li>
    </ul>
  );
};
