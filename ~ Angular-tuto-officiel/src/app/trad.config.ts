import { L10n, setCulture } from '@syncfusion/ej2-base';

export function loadCulture() {
  setCulture('fr-FR');
  L10n.load({
    'fr-FR': {
      'diagram': {
        'Cut': 'Couper',
        'Copy': 'Copier',
        'Paste': 'Coller',
        'Undo': 'Annuler',
        'Redo': 'Rétablir',
        'SelectAll': 'Tout sélectionner',
        'Grouping': 'Regroupement',
        'Group': 'Grouper',
        'UnGroup': 'Dissocier',
        'Order': 'Ordre',
        'BringToFront': 'Mettre au premier plan',
        'MoveForward': 'Avancer',
        'SendBackward': 'Reculer',
        'SendToBack': 'Mettre à l\'arrière'
      }
    }
  });
}