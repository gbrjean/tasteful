
type props = {
  gap?: 'narrow' | 'large';
  type: 'outline' | 'full' | 'icon';
  color?: 'colorful' | 'gray';
  text: string | React.ReactElement;
  value?: string;
  selected?: boolean;
  onClick: (e: any) => void;
};

export const Button = ({ gap, type, color, text, value, selected, onClick }: props) => {
  const classes = `btn ${gap ? `btn-${gap}` : ''} ${type ? `btn-${type}` : ''} ${color ? `btn-${color}` : ''} ${selected ? 'selected' : ''}`;

  return (
    <div className={classes} onClick={() => onClick(value)}>{text}</div>
  )
}
