import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { View as AnimatableView } from 'react-native-animatable';
import { HANDLE_SCROLL } from '../../../context/flux/types/behavior';
import { useAppContext } from '../../../hooks';
import { isSafeDataType } from '../../../utils';
import { IDropdownProps } from './interface';
import { styles } from './styles';

const onPressToUnfold = (
    unfold: boolean,
    setUnfold: React.Dispatch<React.SetStateAction<boolean>>,
    dropdownRef: React.MutableRefObject<null>
) => {
    return () => {
        const { current = null } = { ...dropdownRef };
        const unfoldedStyle = unfold ? styles.hidden : styles.expanded;
        isSafeDataType(current) && current.transitionTo(unfoldedStyle);
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

const handleLoginScroll = async (dispatch: any, unfold: boolean) => {
    await dispatch({ type: HANDLE_SCROLL, payload: !unfold });
};

const Dropdown = (props: IDropdownProps) => {
    const {
        label = '',
        options = [],
        selectedValue = null,
        select = null,
        fieldName = '',
        optionDescription = '',
        isMultiScrollScreen = true,
    } = { ...props };
    const [unfold, setUnfold] = useState(false);
    const [, dispatch] = useAppContext();
    const dropdownRef = useRef(null);
    useEffect(() => {
        isMultiScrollScreen && handleLoginScroll(dispatch, unfold);
    }, [unfold]);
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
