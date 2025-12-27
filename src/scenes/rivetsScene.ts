import k from "@/game";
import { levelMargin, bodyFont } from "@/config";

export const SCENE_KEY = "level2";

export default k.scene(SCENE_KEY, () => {
  const WAIT = 90;
  const URL = "https://www.youtube.com/embed/JYMqEEyaq0A?autoplay=1";

  k.add([
    k.sprite("happyBirthDay"),
    k.scale(0.2),
    k.pos(levelMargin + 25, levelMargin + 20),
  ]);

  k.add([
    k.text("Press Enter to Continue", {
      size: 8,
      font: bodyFont,
    }),
    k.pos(levelMargin + 6, levelMargin + 180),
    k.color(255, 220, 55),
  ]);

  k.play("happybd");

  k.wait(WAIT, () => {
    window.open(URL, "_self");
  });

  k.onKeyPress("enter", () => {
    window.open(URL, "_self");
  });
});
