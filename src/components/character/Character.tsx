import React, {FC} from "react";
import styles from './character.module.css';

interface IProps {
    name: string;
    //children: React.ReactNode;
}
type ITypeProps = IProps & {children?: React.ReactNode};
const Character: FC<ITypeProps> = ({name, children}) => {
    return (
        <div className={styles.characterBox}>
<h2>{name}</h2>
 <p>{children}</p>
        </div>
    );
};

export default Character;