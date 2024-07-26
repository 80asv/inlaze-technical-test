import { CSSProperties } from "react";

interface UsersScoreProps {
  voteAverage: number;
  styles?: CSSProperties;
}

export default function UsersScore({ voteAverage, ...props }: UsersScoreProps) {
  const score = Number((voteAverage * 10).toFixed(0));
  const color = score >= 70 ? '#21d07a' : score >= 50 ? '#d2d531' : '#db2360';
  return (
    <div style={{
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      backgroundColor: '#081c22',
      border: `3px solid ${color}`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '18px',
      ...props.styles
    }}>
      {score}%            
    </div>
  )
}