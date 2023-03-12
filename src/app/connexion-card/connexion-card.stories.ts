import { CommonModule } from "@angular/common";
import { ConnexionCardComponent } from "./connexion-card.component";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { NgHeroiconsModule } from "@dimaslz/ng-heroicons";

export default {
    title: 'Connexion/ConnexionCard',
    component: ConnexionCardComponent,
    decorators: [
        moduleMetadata({
            imports: [
                CommonModule,
                NgHeroiconsModule
            ],
        })
    ],
    args: {
        title: 'New Card Title !!',
    }
} as Meta<ConnexionCardComponent>;

const baseTemplate: Story = (args) => ({
    props: args
});

export const Default = baseTemplate.bind({});
