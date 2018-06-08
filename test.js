console.log('Start test');

const buffered = ({
  handle = (buffer) => {},
  clear = () => {}
} = {}) => {
  let buffer = '';
  return (chunk) => {
    buffer += chunk;
    console.log(JSON.stringify(buffer));
  };
};

buffered({
  handle: ()=>{}
});
