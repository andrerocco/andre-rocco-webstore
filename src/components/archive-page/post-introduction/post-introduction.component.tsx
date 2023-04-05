import styles from './post-introduction.module.css';

interface PostIntroductionProps {}

export default function PostIntroduction({}: PostIntroductionProps) {
    return (
        <div className={styles.container}>
            <div className={styles.text_wrapper}>
                <h1>Aviator Cropped Leather Jacket</h1>
                <p>
                    A jaqueta de couro é um clássico que nunca sai de moda. Ela é um item essencial no guarda-roupa de
                    qualquer homem, pois é uma peça que combina com qualquer ocasião. Além disso, ela é super versátil e
                    pode ser usada em qualquer estação do ano. A jaqueta de couro é um clássico que nunca sai de moda.
                    Ela é um item essencial no guarda-roupa de qualquer homem, pois é uma peça que combina com qualquer
                    ocasião. Além disso, ela é super versátil e pode ser usada em qualquer estação do ano. A jaqueta de
                    couro é um clássico que nunca sai de moda. Ela é um item essencial no guarda-roupa de qualquer
                    homem, pois é uma peça que combina com qualquer ocasião. Além disso, ela é super versátil e pode ser
                    usada em qualquer estação do ano.
                </p>
            </div>
        </div>
    );
}
