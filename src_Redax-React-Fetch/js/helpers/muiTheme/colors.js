//use Material-UI Dark Theme
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
const body = document.body.style;

body.background = darkBaseTheme.palette.canvasColor ;
body.color = darkBaseTheme.palette.primary1Color;

const muiTheme = () => {
  //Default colors in darkBaseTheme

  // darkBaseTheme.palette.accent1Color       = '#ff4081';
  // darkBaseTheme.palette.accent2Color       = '#f50057';
  // darkBaseTheme.palette.accent3Color       = '#ff80ab';
  // darkBaseTheme.palette.alternateTextColor = '#303030';
  // darkBaseTheme.palette.borderColor        = 'rgba(255, 255, 255, 0.3)';
  // darkBaseTheme.palette.canvasColor        = '#303030';
  // darkBaseTheme.palette.clockCircleColor   = 'rgba(255, 255, 255, 0.12)';
  // darkBaseTheme.palette.disabledColor      = 'rgba(255, 255, 255, 0.3)';
  // darkBaseTheme.palette.pickerHeaderColor  = 'rgba(255, 255, 255, 0.12)';
  darkBaseTheme.palette.primary1Color      = '#2793e8';
  // darkBaseTheme.palette.primary2Color      = '#0097a7';
  // darkBaseTheme.palette.primary3Color      = '#757575';
  // darkBaseTheme.palette.secondaryTextColor = 'rgba(255, 255, 255, 0.7)';
  // darkBaseTheme.palette.shadowColor        = '#000099';
  // darkBaseTheme.palette.textColor          = 'rgba(255, 255, 255, 1)';

  return darkBaseTheme
};

export default muiTheme();