import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;
    return (
        // .children => 래퍼 컴포넌트 생성 div로 props 코드를 감싸게 해줌
        <div className={classes}>{props.children}</div>
    );
}

export default Card;