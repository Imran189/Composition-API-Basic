import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useNoteStore = defineStore("counter", () => {
  const count = ref(0);
  const notes = ref([
    {
      id: "id1",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi veritatis odio eius sed atque, esse ullam in distinctio assumenda beatae dolore rerum sequi saepe repellat perspiciatis quos optioeveniet facere",
    },
    {
      id: "id2",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi veritatis odio eius sed atque, esse ullam in distinctio assumenda beatae dolore rerum sequi saepe repellat perspiciatis quos optioeveniet facere",
    },
    {
      id: "id3",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi veritatis odio eius sed atque, esse ullam in distinctio assumenda beatae dolore rerum sequi saepe repellat perspiciatis quos optioeveniet facere",
    },
  ]);

  function addNoteState(newNote) {
    let currentDate = new Date().getTime(),
      id = currentDate.toString();
    let note = {
      id: id,
      content: newNote,
    };

    notes.value.unshift(note);
  }

  function deleteNoteState(id) {
    notes.value = notes.value.filter((note) => {
      return note.id !== id;
    });
  }

  function updateNote(id, content) {
    let index = notes.value.findIndex((note) => note.id === id);
    notes.value[index].content = content;
  }

  const getNoteContent = computed(() => {
    return (id) => {
      return notes.value.filter((note) => {
        return note.id === id;
      })[0].content;
    };
  });

  return {
    count,
    notes,
    getNoteContent,
    addNoteState,
    deleteNoteState,
    updateNote,
  };
});
