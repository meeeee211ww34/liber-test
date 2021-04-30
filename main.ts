let yes_or_no = ""
story.startCutscene(function () {
    story.printText("yes or no", 0, 0)
    story.showPlayerChoices("yes", "no")
    yes_or_no = story.getLastAnswer()
    if (yes_or_no == "yes") {
        story.printText("fuck yeah", 0, 0)
    }
    if (yes_or_no == "no") {
        story.printText("FUCK NO", 0, 0)
    }
})
