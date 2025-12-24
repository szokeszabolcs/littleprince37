import k from "@/game";
import { levelMargin, titleFont, bodyFont } from "@/config";
import { SCENE_KEY as Level2SceneKey } from "@/scenes/rivetsScene";

export const SCENE_KEY = "start-screen";

export default k.scene(SCENE_KEY, ({ onStartGame }) => {
  k.add([
    //      123456789012345678
    k.text("THE LITTLE PRINCE\n        VS\n   DONKEY KONG", {
      size: 10,
      width: 200,
      font: titleFont,
      lineSpacing: 5,
    }),
    k.pos(levelMargin + 6, levelMargin + 5),
    k.color(0, 255, 0),
  ]);

  k.add([
    k.sprite("startGraphic"),
    k.scale(0.7),
    k.pos(levelMargin + 55, levelMargin + 60),
  ]);

  k.add([
    k.text("Press Enter to Continue", {
      size: 8,
      font: bodyFont,
    }),
    k.pos(levelMargin + 12, levelMargin + 148),
    k.color(255, 255, 255),
  ]);

  k.onKeyPress("enter", () => {
    onStartGame();
  });

  k.onKeyPress("r", () => {
    k.go(Level2SceneKey, { onStartGame });
  });
});
