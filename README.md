# Contributions

Welcome to the EmBED web application project, as a people of excellence we believe in systematic process and unified
 approach to solving bigger challenges. Below are the steps you need to take to make contributions to this project.

## How to contribute:

- Pick an issue from the `development` issues board. If there is none with your name yet, create one and assign
 yourself to it.

- Create a branch with the issue name and work from there.

- Always pull from develop.

- Create branch from develop.

- Propose a **Pull Request** to `develop` branch. Always ensure you keep your local branch updated by pulling the
 `develop` branch.

- Branch should have name of issue no. as well as a short description of the issue.

- Commit messages should be descriptive:

  ```
    fix: remove red border from button
    feature: add button to user-card
    refactor: ...
    chore: update react to v2...
  ```

- One commit per PR

- Your PR description should follow this syntax:

    ```
      Worked on ...
  
      This closes #2 
    ```

> NB: The `#2` represents the issue number you have worked on.

## Proposing Enhancements & Changes

If you have noticed a bug, glitch or perceive an improvement, create issues in the `suggestion` tab.

![suggest new features](./assets/images/suggest-new.png)

Suggestions that have been agreed upon will be moved to the `features` tab.

## Commenting

Use comments in your code regularly to explain unique concepts. Your comments should be short and descriptive. Use
 comments above the code lines and not *inline*
 
  ```
    {/* This will hold all courses for visitors */}
    <CourseCategories />
    
    {/* Testimonials */}
    <section>
      ...
    </section>
    ...
   ```

**DO NOT DO THIS**

   ```
    <CourseCategories /> {/* This will hold all courses for visitors */}
    
    <section> {/* Testimonials */}
      ...
    </section>
    ...
   ```

## IDE Settings

You may choose whatever IDE or code editor you prefer, we however encourage you to ignore your workspace settings so
 as to not ruin that of others.
 
 ```.gitignore
   .vscode
   .idea
   .atom
```

## Folder Structure

We expect your folder structure to follow this simple flow. All resources needed to compose a modularized unit should
 be housed as one module.
 
 Also observe naming conventions and name your files appropriately.
