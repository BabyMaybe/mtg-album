/* eslint-disable react/no-array-index-key */
import ManaSymbol from '../Mana/ManaSymbol';

const RulesText = ({ rules, flavor }) => {
  const match = /({\w})/;
  const paragraphs = rules.split('\n');
  return (
    <div className="card-body">
      {paragraphs.map((p, index) => {
        const builder = p.split(match);

        return (
          <p className="rules-paragraph" key={index}>
            {builder.map((segment, idx) => {
              if (match.test(segment)) {
                return <ManaSymbol mana={segment} key={idx} />;
              }
              return segment;
            })}
          </p>
        );
      })}
      {flavor && (
      <>
        <hr />
        <p className="card-flavor">{flavor}</p>
      </>
      )}
    </div>
  );
};
export default RulesText;
