import React, { useRef, useState } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { View as AnimatableView } from 'react-native-animatable';
import { IDropdownProps } from './interface';
import { styles } from './styles';

const onPressToUnfold = (
    unfold: boolean,
    setUnfold: React.Dispatch<React.SetStateAction<boolean>>,
    dropdownRef: React.MutableRefObject<null>
) => {
    return () => {
        const unfoldedStyle = unfold ? styles.hidden : styles.expanded;
        !!dropdownRef && dropdownRef.current.transitionTo(unfoldedStyle);
        setUnfold(!unfold);
    };
};
const renderLabel = (
    unfold: boolean,
    selectedValue: string | number | null,
    label: string
) => {
    return (
        !unfold && (
            <Text style={styles.label}>
                {!!selectedValue ? selectedValue : label}
            </Text>
        )
    );
};

const renderOptions = (
    unfold: boolean,
    setUnfold: React.Dispatch<React.SetStateAction<boolean>>,
    dropdownRef: React.MutableRefObject<null>,
    fieldName: string,
    select: any,
    optionDescription: string
) => {
    return ({ item }) => (
        <TouchableOpacity
            style={styles.ages}
            onPress={() => {
                select(fieldName, item);
                onPressToUnfold(unfold, setUnfold, dropdownRef)();
            }}>
            <Text style={styles.label}>{`${item} ${optionDescription}`}</Text>
        </TouchableOpacity>
    );
};

const keyExtract = (item: string | number) => {
    return `dropdown-id: ${item.toString()}`;
};

const Dropdown = (props: IDropdownProps) => {
    const {
        label = '',
        options = [],
        selectedValue = null,
        select = null,
        fieldName = '',
        optionDescription = '',
    } = { ...props };
    const [unfold, setUnfold] = useState(false);
    const dropdownRef = useRef(null);
    return (
        <AnimatableView style={styles.container} ref={dropdownRef}>
            <TouchableOpacity
                onPress={onPressToUnfold(unfold, setUnfold, dropdownRef)}>
                {renderLabel(unfold, selectedValue, label)}
            </TouchableOpacity>

            {unfold && (
                <FlatList
                    data={options}
                    keyExtractor={keyExtract}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderOptions(
                        unfold,
                        setUnfold,
                        dropdownRef,
                        fieldName,
                        select,
                        optionDescription
                    )}
                />
            )}
        </AnimatableView>
    );
};

export default Dropdown;
