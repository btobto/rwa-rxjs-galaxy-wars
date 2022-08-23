import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./constants";
import { Enemy } from "./enemy";
import { Star, State } from "./interfaces";
import { Player } from "./player";

export class Renderer {
	constructor(
		private canvas: HTMLCanvasElement,
		private ctx: CanvasRenderingContext2D
	) {}

	draw(player: Player, stars: Star[], enemies: Enemy[]) {
		this.ctx.fillStyle = 'black';
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

		this.ctx.fillStyle = 'white';
		stars.forEach((star: Star) => {
			this.ctx.fillRect(star.x, star.y, star.size, star.size);
		});

		enemies.forEach(enemy => enemy.draw(this.ctx));
	
		player.draw(this.ctx);	
	}
}

export const draw = (
	ctx: CanvasRenderingContext2D,
	scoreContainer: HTMLElement,
	state: State,
) => {
	ctx.fillStyle = 'black';

	ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

	ctx.fillStyle = 'white';
	state.stars.forEach((star: Star) => {
		ctx.fillRect(star.x, star.y, star.size, star.size);
	});

	state.enemies.forEach(enemy => {
		ctx.drawImage(enemy.sprite, enemy.x, enemy.y, enemy.width, enemy.height);
	});

	ctx.drawImage(state.player.sprite, state.player.x, state.player.y, state.player.width, state.player.height);
}