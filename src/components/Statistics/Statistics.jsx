import css from './Statistics.module.css'

export const Statistics = ({ title, stats }) => {
    return <section className={css.statistics}>
        {title&&<h2 className={css.title}>{title}</h2>}
        <ul className={css["stat-list"]}>
            {stats.map(({ id, label, percentage }) => (
                <li className={css.item} key={id} style={{ backgroundColor: getRandomColor() }}>
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{percentage}%</span>
                    
                </li>
            ))}
        </ul>
    </section>
}

const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};