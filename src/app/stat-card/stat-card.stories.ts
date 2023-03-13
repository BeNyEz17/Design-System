import { CommonModule } from "@angular/common";
import { StatCardComponent } from "./stat-card.component";                                                                           
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { NgHeroiconsModule } from "@dimaslz/ng-heroicons";

export default {
    title: 'Connexion/StatCard',
    component: StatCardComponent,
    decorators: [
        moduleMetadata({
            imports: [
                CommonModule,
                NgHeroiconsModule
            ],
        })
    ],
    args: {
        title: 'Default',
    }
} as Meta<StatCardComponent>;

const baseTemplate: Story = (args) => ({
    props: args
});

export const Default = baseTemplate.bind({});
