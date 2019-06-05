import React from 'react';

import IconSettings from '~/components/icon-settings';
import PageHeader from '~/components/page-header'; // `~` is replaced with design-system-react at runtime
import Button from '~/components/button';
import ButtonGroup from '~/components/button-group';
import Dropdown from '~/components/menu-dropdown';
import DropdownTrigger from '~/components/menu-dropdown/button-trigger';

class Example extends React.Component {
	static displayName = 'ObjectHomePageHeaderExample';

	render() {
		const actions = () => (
			<div>
				<ButtonGroup>
					<Button label="New" />
					<Dropdown
						align="right"
						assistiveText={{ icon: 'More Options' }}
						iconCategory="utility"
						iconName="down"
						iconVariant="border-filled"
						id="page-header-dropdown-object-home-nav-right"
						options={[
							{ label: 'Menu Item One', value: 'A0' },
							{ label: 'Menu Item Two', value: 'B0' },
							{ label: 'Menu Item Three', value: 'C0' },
							{ type: 'divider' },
							{ label: 'Menu Item Four', value: 'D0' },
						]}
					/>
				</ButtonGroup>
			</div>
		);

		const controls = () => (
			<div>
				<Dropdown
					align="right"
					id="page-header-dropdown-object-home-content-right"
					options={[
						{ label: 'Menu Item One', value: 'A0' },
						{ label: 'Menu Item Two', value: 'B0' },
						{ label: 'Menu Item Three', value: 'C0' },
						{ type: 'divider' },
						{ label: 'Menu Item Four', value: 'D0' },
					]}
				>
					<DropdownTrigger>
						<Button
							assistiveText={{ icon: 'List View Controls' }}
							className="slds-m-right_xx-small"
							iconCategory="utility"
							iconName="settings"
							iconVariant="more"
						/>
					</DropdownTrigger>
				</Dropdown>
				<Dropdown
					align="right"
					assistiveText={{ icon: 'Change view' }}
					iconCategory="utility"
					iconName="settings"
					iconVariant="more"
					id="page-header-dropdown-object-home-content-right-2"
					options={[
						{ label: 'Menu Item One', value: 'A0' },
						{ label: 'Menu Item Two', value: 'B0' },
						{ label: 'Menu Item Three', value: 'C0' },
						{ type: 'divider' },
						{ label: 'Menu Item Four', value: 'D0' },
					]}
				>
					<DropdownTrigger>
						<Button
							assistiveText={{ icon: 'Change view' }}
							className="slds-m-right_xx-small"
							iconCategory="utility"
							iconName="table"
							iconVariant="more"
							variant="icon"
						/>
					</DropdownTrigger>
				</Dropdown>
				<Button
					assistiveText={{ icon: 'Edit List' }}
					iconCategory="utility"
					iconName="edit"
					iconVariant="border"
					variant="icon"
				/>
				<Button
					assistiveText={{ icon: 'Refresh' }}
					iconCategory="utility"
					iconName="refresh"
					iconVariant="border"
					variant="icon"
				/>
				<ButtonGroup>
					<Button
						assistiveText={{ icon: 'Charts' }}
						iconCategory="utility"
						iconName="chart"
						iconVariant="border"
						variant="icon"
					/>
					<Button
						assistiveText={{ icon: 'Filters' }}
						iconCategory="utility"
						iconName="filterList"
						iconVariant="border"
						variant="icon"
					/>
				</ButtonGroup>
			</div>
		);

		return (
			<IconSettings iconPath="/assets/icons">
				<PageHeader
					iconAssistiveText="Opportunity"
					iconCategory="standard"
					iconName="opportunity"
					info="10 items • Updated 13 minutes ago"
					label="Opportunities"
					nameSwitcherDropdown={
						<Dropdown
							assistiveText={{ icon: 'Name Switcher' }}
							buttonClassName="slds-button_icon-small"
							buttonVariant="icon"
							iconCategory="utility"
							iconName="down"
							id="page-header-name-switcher-dropdown"
							options={[
								{ label: 'Menu Item One', value: 'A0' },
								{ label: 'Menu Item Two', value: 'B0' },
								{ label: 'Menu Item Three', value: 'C0' },
								{ label: 'Menu Item Four', value: 'D0' },
							]}
						/>
					}
					onRenderActions={actions}
					onRenderControls={controls}
					title="Recently Viewed"
					truncate
					variant="object-home"
				/>
			</IconSettings>
		);
	}
}

export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
