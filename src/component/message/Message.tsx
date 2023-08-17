type Props = {
  text: string;
  variant: 'success' | 'error' | 'info' | 'primary' | 'warning' | 'secondary';
  show?: boolean;
};

const bgColors = {
  success: '#00C851',
  error: '#ff4444',
  info: '#33b5e5',
  primary: '#4285F4',
  warning: '#ffbb33',
  secondary: '#37474F',
};

const Message = ({ text, variant, show = true }: Props) => {
  return (
    <div
      style={{
        width: '80%',
        backgroundColor: bgColors[variant],
        borderRadius: '5px',
        margin: '10px auto',
        display: show ? 'flex' : 'none',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          color: '#fff',
          padding: `${text ? '10px' : '0'}`,
          fontSize: '1rem',
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default Message;
