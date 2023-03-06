'use strict';

function btnClicked(){
  const [liked, setLiked] = React.useState(false);

  if (liked) {
    return 'You clicked this!';
  }

  return React.createElement(
    'button',
    {
      onClick: () => setLiked(true),
    },
    'Click'
  );
}
const rootNode = document.getElementById('custom-component-button');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(btnClicked))