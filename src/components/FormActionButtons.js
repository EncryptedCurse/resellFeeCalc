/* functions */
import { useSearchParams, createSearchParams } from 'react-router-dom';
import { copyToClipboard } from 'functions/utilities';

/* components */
import { Button, ButtonGroup, useToast } from '@chakra-ui/react';
import { FaLink as LinkIcon, FaEraser as ResetIcon } from 'react-icons/fa';
import { toastProps } from 'sites/props';

/**
 * @param {object}   props
 * @param {function} props.setValues     - Form value update function.
 * @param {object}   props.currentValues - Current form values.
 * @param {object}   props.initialValues - Parent's tooltip label.
 * @returns {React.PropTypes.element} Constructed JSX element.
 */
export default function FormActionButtons(props) {
	const [, setSearchParams] = useSearchParams();
	const toast = useToast();

	function handleCopyClick() {
		const changedValues = Object.fromEntries(
			Object.entries(props.currentValues).filter(([key, value]) => value !== props.initialValues[key])
		);

		let toastMessageProps;
		if (Object.keys(changedValues).length !== 0) {
			toastMessageProps = {
				status: 'success',
				title: 'Link copied',
			};
			const searchParams = createSearchParams(changedValues).toString();
			const url = `${window.location.href.split('?')[0]}?${searchParams}`;
			copyToClipboard(url);
		} else {
			toastMessageProps = {
				status: 'warning',
				title: 'No link to copy',
				description: 'Change some values first',
			};
		}
		toast.closeAll();
		toast({
			...toastProps,
			...toastMessageProps,
		});
	}

	function handleResetClick() {
		toast.closeAll();
		toast({
			title: 'Form reset',
			status: 'info',
			...toastProps,
		});
		props.setValues(props.initialValues);
		setSearchParams();
	}

	return (
		<ButtonGroup spacing={3} w="100%">
			<Button onClick={handleCopyClick} leftIcon={<LinkIcon />} w="100%">
				Copy link
			</Button>
			<Button onClick={handleResetClick} leftIcon={<ResetIcon />} w="100%">
				Reset
			</Button>
		</ButtonGroup>
	);
}
