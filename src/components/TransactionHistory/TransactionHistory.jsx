import css from './TransactionHistory.module.css'

export const  TransactionHistory = ({ items }) => {
    return (<table className={css["transaction-history"]}>
        <thead>
            <tr className={css.header}>
                <th className={css["header-item"]}>Type</th>
                <th className={css["header-item"]}>Amount</th>
                <th className={css["header-item"]}>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(({ id, type, amount, currency }) => (
                <tr key={id} className={css["body-list"]}>
                <td className={css["body-item"]}>{type}</td>
                <td className={css["body-item"]}>{amount}</td>
                <td className={css["body-item"]}>{currency}</td>
            </tr>
            ))
            }
        </tbody>
    </table>

    )
}